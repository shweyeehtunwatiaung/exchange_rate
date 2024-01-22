import React, { startTransition, useMemo, useState } from "react";
import * as Ariakit from "@ariakit/react";
import { matchSorter } from "match-sorter";
import "@/styles/combox.css";
import { cn } from "@/utils/cn";

interface AutocompleteProps {
  items: {
    value: string;
    label: string;
  }[];
  setSelectedItem?: (arg?: { value: string; label: string } | null) => void;
  defaultSelectedValue?: string;
  className?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  items,
  setSelectedItem = () => {},
  className,
  defaultSelectedValue
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const matches = useMemo(
    () => items && matchSorter(items, searchValue, { keys: ["label"] }),
    [items, searchValue]
  );

  return (
    <Ariakit.ComboboxProvider
      setValue={(value) => {
        startTransition(() => setSearchValue(value));
        const selectedItem = items.find((item) => item.label === value);
        if (selectedItem) {
          setSelectedItem(selectedItem);
        }
      }}
    >
      <div className={cn("relative w-full", className)}>
        <Ariakit.Combobox
          placeholder={
            defaultSelectedValue
              ? items?.find((item) => item.value === defaultSelectedValue)
                  ?.label || "Select Currency"
              : "Select Currency"
          }
          className="combobox w-full"
        />
        <Ariakit.ComboboxDisclosure className="absolute inset-y-0 right-3 m-auto" />
      </div>
      <Ariakit.ComboboxPopover gutter={2} sameWidth className="popover">
        {matches?.length ? (
          matches?.map((item) => (
            <Ariakit.ComboboxItem
              key={item.value}
              value={item.label}
              className="combobox-item text-black"
            />
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
  );
};

export default Autocomplete;
