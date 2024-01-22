export const routeFilter = (params: any) => {
  return new URLSearchParams(params);
};

export const formatNumberWithDecimal = (val: string): string => {
  const result = Number(val)
    ?.toString()
    ?.replace(/[^0-9\.]+/g, "")
    ?.replace(/([^\d]*)(\d*(\.\d{0,2})?)(.*)/, "$2")
    ?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return result;
};

export const formatNumber = (val: number) => {
  return Number(val)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const formatNumberNoDecimal = (val: number) => {
  return val
    ? Number(val)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : 0;
};
export const transformObjectsToArray = (data: { [key: string]: any }) => {
  return (
    data &&
    Object?.entries(data)?.reduce((result, [value, label]) => {
      result = [
        ...result,
        {
          value,
          label,
        },
      ];
      return result;
    }, [] as { value: string; label: string | string }[])
  );
};
