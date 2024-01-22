"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useGetCurrencies, useGetRates } from "@/services/currencies";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text
} from "@radix-ui/themes";
import { formatNumberWithDecimal, transformObjectsToArray } from "@/utils";
import NumberInput from "@/components/ui/input/NumberInput";
// import Autocomplete from "@/components/ui/input/Autocomplete";
import { IoMdSwap } from "react-icons/io";
import Autocomplete from "@/components/ui/input/Autocomplets";
export enum BASE_CURRENCY {
  MMK = "MMK",
  USD = "USD"
}

interface HomeProps {
  lastUpdated: string;
}

const Home: React.FC<HomeProps> = ({ lastUpdated }): React.JSX.Element => {
  const [destinationValue, setDestinationValue] = useState<number>(0);
  const [destinationCurrency, setDestinationCurrency] = useState<BASE_CURRENCY>(
    BASE_CURRENCY.USD
  );
  const [sourceCurrency, setSourceCurrency] = useState<BASE_CURRENCY>(
    BASE_CURRENCY.MMK
  );
  const [sourceValue, setSourceValue] = useState<string>("1");

  // Data fetching
  const { data: currencies } = useGetCurrencies();
  const { data: rates } = useGetRates();

  console.log("currencies => ", currencies);

  const sourceRate = +rates?.rates[sourceCurrency];
  const destinationRate = +rates?.rates[destinationCurrency];

  // Calculate the fixed exchange rate for the source currency to achieve the same value as the destination currency
  const fixedSourceRate = (1 * (destinationRate / sourceRate)).toFixed(5);

  // Calculate the fixed exchange rate for the destination currency to achieve the same value as the source currency
  const fixedDestinationRate = (1 / (destinationRate / sourceRate)).toFixed(5);

  // Transform the 'currencies' object into an array
  const currenciesList = transformObjectsToArray(currencies?.currencies);

  // Calculate for currency converter
  const calculateExchangeRate = useCallback(
    (val: string) => {
      if (
        typeof sourceRate === "number" &&
        typeof destinationRate === "number"
      ) {
        const result = Number(
          (Number(val) * (destinationRate / sourceRate)).toFixed(5)
        );
        setSourceValue(val);
        setDestinationValue(result);
      } else {
        console.error("Invalid currency");
      }
    },
    [destinationRate, sourceRate]
  );

  const swapExchangeRate = () => {
    setSourceCurrency(destinationCurrency);
    setDestinationCurrency(sourceCurrency);
  };

  // /* ================== Use Effects ==================
  useEffect(() => {
    calculateExchangeRate(sourceValue);
  }, [calculateExchangeRate, sourceValue]);

  return (
    <Grid columns="1">
      <Box className="w-full rounded-md shadow-md p-4 m-auto flex justify-center lg:mt-10">
        <div className="bg-white rounded-[6px] space-y-[24px]">
          <Heading className="text-black text-center text-2xl">
            Currency Converter
          </Heading>
          <Flex direction="column" justify="center" className="space-y-4">
            <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-x-4 space-y-8 lg:space-y-0">
              <NumberInput
                min={1}
                onChange={(event) =>
                  calculateExchangeRate(event.target.value as string)
                }
                sourceCurrency={sourceCurrency}
                defaultValue={1}
                addonIcon={
                  <span
                    className={`fi fi-${sourceCurrency
                      .slice(0, 2)
                      .toLowerCase()}`}
                  />
                }
              />
              <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:gap-x-4">
                <Autocomplete
                  items={currenciesList}
                  setSelectedItem={({ value }: any) => setSourceCurrency(value)}
                  defaultSelectedValue={sourceCurrency}
                  className="w-[240px]"
                />

                <div className="flex justify-center maxMd:my-4">
                  <div className="cursor-pointer" onClick={swapExchangeRate}>
                    <IoMdSwap className="text-black w-[30px] h-[30px]" />
                  </div>
                </div>

                <Autocomplete
                  items={currenciesList}
                  setSelectedItem={({ value }: any) =>
                    setDestinationCurrency(value)
                  }
                  defaultSelectedValue={destinationCurrency}
                  className="w-[240px]"
                />
              </div>
            </div>

            <div>
              <Text className="text-2xl font-extrabold">
                {formatNumberWithDecimal(sourceValue.toString())}{" "}
                {sourceCurrency} ={" "}
                {formatNumberWithDecimal(destinationValue.toString())}{" "}
                {destinationCurrency}
              </Text>
            </div>
          </Flex>
          <div className="space-y-4">
            <Flex direction="column">
              <Text className="text-black font-semibold">
                1 {sourceCurrency} = {formatNumberWithDecimal(fixedSourceRate)}{" "}
                {fixedSourceRate.startsWith("0.0") && `(${fixedSourceRate})`}
                {destinationCurrency}
              </Text>
              <Text className="text-black font-semibold">
                1 {destinationCurrency} ={" "}
                {formatNumberWithDecimal(fixedDestinationRate)}{" "}
                {fixedDestinationRate.startsWith("0.0") &&
                  `(${fixedDestinationRate})`}{" "}
                {sourceCurrency}
              </Text>
              <Text className="text-sm font-md">
                Last Updated: {lastUpdated}
              </Text>
            </Flex>
            <Flex justify="center">
              <Button
                className="w-[160px]"
                variant="solid"
                color="ruby"
                onClick={swapExchangeRate}
              >
                Swap Currency
              </Button>
            </Flex>
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default Home;
