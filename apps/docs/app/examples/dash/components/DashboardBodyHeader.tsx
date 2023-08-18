import { Button } from "@rempi-ui/button";
import { Calendar, DateRange } from "@rempi-ui/calendar";
import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Popover } from "@rempi-ui/popover";
import { addDays, format } from "date-fns";
import { CalendarIcon, DownloadIcon } from "lucide-react";
import { FC, useState } from "react";

const StyledContainerHeader = styled.div`
  width: 100%;
  gap: ${({ theme }) => theme.spaces[4]};
`;

const StyledContainerCalendarDownload = styled.div`
  gap: ${({ theme }) => theme.spaces[4]};
`;

const StyledCalendarWithoutBorder = styled.div`
  .sc-fwdjSP__months {
    border: 0;
    padding: 0;
  }
`;

const StyledDownloadButton = styled.div`
  background-color: ${({ theme }) => theme.colors.primary12};
  gap: ${({ theme }) => theme.spaces[2]};
`;

const StyledCalendarButton = styled.div`
  gap: ${({ theme }) => theme.spaces[2]};
`;

export const DashboardBodyHeader: FC = () => {

    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 20),
    });

    return <StyledContainerHeader
        as={Flex}
        justifyContent="space-between"
        flexWrap="wrap"
    >
        <Heading as="h3" variant="5">
            Dashboard
        </Heading>
        <StyledContainerCalendarDownload as={Flex} flexWrap="wrap">
            <Popover.Root>
                <Popover.Trigger>
                    <StyledCalendarButton as={Button} variant="outlined" color="primary">
                        {selectedRange?.from ? (
                            selectedRange.to ? (
                                <>
                                    {`${format(selectedRange.from, "dd LLL, y")} - ${format(
                                        selectedRange.to,
                                        "dd LLL, y"
                                    )}`}
                                </>
                            ) : (
                                format(selectedRange.from, "dd LLL, y")
                            )
                        ) : (
                            "Selecione um período"
                        )}
                        <CalendarIcon size={16} />
                    </StyledCalendarButton>
                </Popover.Trigger>
                <Popover.Content>
                    <StyledCalendarWithoutBorder
                        as={Calendar}
                        numberOfMonths={2}
                        mode="range"
                        selected={selectedRange}
                        onSelect={setSelectedRange}
                    />
                </Popover.Content>
            </Popover.Root>
            <StyledDownloadButton as={Button} variant="solid" color="primary">
                <DownloadIcon size={16} /> Download
            </StyledDownloadButton>
        </StyledContainerCalendarDownload>
    </StyledContainerHeader>
}