import { Card } from "@rempi-ui/card";
import { Flex } from "@rempi-ui/flex";
import { Skeleton } from "@rempi-ui/skeleton";
import { FC } from "react";

export const SkeletonPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Card.Root>
        <Card.Header>
          <Skeleton
            style={{
              height: "16px",
              width: "115px",
              borderRadius: "var(--radii-1)",
            }}
          />
          <Skeleton
            style={{
              height: "21px",
              width: "220px",
              borderRadius: "var(--radii-1)",
            }}
          />
        </Card.Header>
        <Card.Content flexDirection="column">
          <Skeleton
            style={{
              height: "71px",
              maxWidth: "330px",
              width: "100%",
              borderRadius: "var(--radii-1)",
            }}
          />
          <div>
            {Array(3)
              .fill(0)
              .map((_, index, ar) => (
                <Flex
                  key={index}
                  flexDirection="row"
                  alignItems="start"
                  style={{
                    gap: "var(--spaces-3)",
                    marginBottom:
                      ar.length === index + 1 ? 0 : "var(--spaces-4)",
                    paddingBottom:
                      ar.length === index + 1 ? 0 : "var(--spaces-4)",
                  }}
                >
                  <Skeleton
                    style={{
                      height: "8px",
                      width: "8px",
                      borderRadius: "var(--radii-1)",
                    }}
                  />
                  <Flex
                    flexDirection="column"
                    style={{
                      gap: "var(--spaces-1)",
                    }}
                  >
                    <Skeleton
                      style={{
                        height: "16px",
                        width: "220px",
                        borderRadius: "var(--radii-1)",
                      }}
                    />
                    <Skeleton
                      style={{
                        height: "16px",
                        width: "80px",
                        borderRadius: "var(--radii-1)",
                      }}
                    />
                  </Flex>
                </Flex>
              ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <Skeleton
            style={{
              height: "34px",
              width: "100%",
              borderRadius: "var(--radii-1)",
            }}
          />
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};
