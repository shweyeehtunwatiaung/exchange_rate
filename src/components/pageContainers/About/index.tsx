import { Text } from "@/components/ui/typo";
import { Box, Flex, Grid } from "@radix-ui/themes";
import React from "react";

const AboutUs = () => {
  return (
    <Grid columns="1">
      <Box>
        <Grid columns="2" gap="4" className="maxMd:grid maxMd:grid-cols-1">
          <Box className="shadow-md rounded-lg p-4">
            <Flex direction="column" gap="4">
              <Flex gap="2">
                <span className="fi fi-us" />
                <Text className="text-lg">USD - US Dollar</Text>
              </Flex>
              <Text align="left" size="4">
                Our currency rankings show that the most popular US Dollar
                exchange rate is the USD to USD rate. The currency code for US
                Dollars is USD. The currency symbol is $.
              </Text>
            </Flex>
          </Box>
          <Box className="shadow-md rounded-lg p-4">
            <Flex direction="column" gap="4">
              <Flex gap="2">
                <span className="fi fi-us" />
                <Text className="text-lg">USD - US Dollar</Text>
              </Flex>
              <Text align="left" size="4">
                Our currency rankings show that the most popular US Dollar
                exchange rate is the USD to USD rate. The currency code for US
                Dollars is USD. The currency symbol is $.
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default AboutUs;
