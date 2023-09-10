import { forwardRef, HTMLRempiProps, styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { NavigationMenu } from "@rempi-ui/navigation-menu";
import { FC } from "react";

type ListItemProps = HTMLRempiProps<"a"> & { title: string };

const StyledItemLink = styled.a`
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: ${({ theme }) => theme.spaces[3]};
  border-radius: ${({ theme }) => theme.radii[2]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.lineHeights[1]};

  :hover {
    background-color: ${({ theme }) => theme.colors.grey3};
  }
`;

const StyledItemHeading = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights[3]}
  line-height: ${({ theme }) => theme.lineHeights[2]};
  margin-bottom: ${({ theme }) => theme.spaces[1]};
  color: ${({ theme }) => theme.colors.grey12};
`;

const StyledItemText = styled.div`
  color: ${({ theme }) => theme.colors.grey11};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  font-weight: initial;
`;

const ListItem = forwardRef<"a", ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <StyledItemLink className={className} {...props} ref={ref}>
            <StyledItemHeading>{title}</StyledItemHeading>
            <StyledItemText>{children}</StyledItemText>
          </StyledItemLink>
        </NavigationMenu.Link>
      </li>
    );
  }
);

const StyledUlTwo = styled.ul`
  display: grid;
  padding: ${({ theme }) => theme.spaces[5]};
  margin: 0;
  column-gap: ${({ theme }) => theme.spaces[2]};
  list-style: none;

  @media only screen and (min-width: 600px) {
    width: 600px;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const StyledUlOne = styled.ul`
  display: grid;
  padding: ${({ theme }) => theme.spaces[5]};
  margin: 0;
  column-gap: ${({ theme }) => theme.spaces[2]};
  list-style: none;

  @media only screen and (min-width: 600px) {
    width: 500px;
    grid-template-columns: 0.75fr 1fr;
  }
`;

export const NavigationMenuPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <NavigationMenu.Root>
        <NavigationMenu.Item>
          {/* i18n */}
          <NavigationMenu.Trigger>Aprenda</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <StyledUlOne>
              <li style={{ gridRow: "span 3 / auto" }}>
                <NavigationMenu.Link asChild>
                  <a
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(135deg, var(--colors-grey3) 0%, var(--colors-primary3) 100%)",
                      borderRadius: "var(--radii-2)",
                      padding: "var(--spaces-6)",
                      textDecoration: "none",
                      outline: "none",
                      userSelect: "none",
                    }}
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="var(--colors-grey12)"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div
                      style={{
                        color: "var(--colors-grey12)",
                        fontSize: "var(--font-sizes-5)",
                        fontWeight: "var(--font-weights-3)",
                        lineHeight: "var(--line-heights-2)",
                        marginTop: "var(--spaces-4)",
                        marginBottom: "var(--spaces-2)",
                      }}
                    >
                      Radix Primitives
                    </div>
                    <p
                      style={{
                        color: "var(--colors-grey11)",
                        fontSize: "var(--font-sizes-3)",
                        lineHeight: "var(--line-heights-1)",
                      }}
                    >
                      {/* i18n */}
                      Componentes acessíveis e sem estilo para React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                {/* i18n */}
                CSS-in-JS com a melhor experiência de desenvolvedor da
                categoria.
              </ListItem>
              {/* i18n */}
              <ListItem href="/colors" title="Cores">
                {/* i18n */}
                Paletas lindas e bem pensadas com modo escuro automático.
              </ListItem>
              {/* i18n */}
              <ListItem href="https://icons.radix-ui.com/" title="Icones">
                {/* i18n */}
                Um conjunto nítido de ícones 15x15, equilibrados e consistentes.
              </ListItem>
            </StyledUlOne>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* i18n */}
          <NavigationMenu.Trigger>Visão geral</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <StyledUlTwo>
              <ListItem
                title="Introdução"
                href="https://www.radix-ui.com/docs/primitives/overview/introduction"
              >
                {/* i18n */}
                Crie sistemas de design e aplicativos da web acessíveis e de
                alta qualidade.
              </ListItem>
              <ListItem
                title="Tutorial"
                href="https://www.radix-ui.com/docs/primitives/overview/getting-started"
              >
                {/* i18n */}
                Um tutorial rápido para você começar a usar o Radix Primitives.
              </ListItem>
              <ListItem
                title="Estilo"
                href="https://www.radix-ui.com/docs/primitives/guides/styling"
              >
                {/* i18n */}
                Sem estilo e compatível com qualquer solução de estilo.
              </ListItem>
              <ListItem
                title="Animações"
                href="https://www.radix-ui.com/docs/primitives/guides/animation"
              >
                {/* i18n */}
                Use quadros-chave CSS ou qualquer biblioteca de animação de sua
                escolha.
              </ListItem>
              <ListItem
                title="Acessibilidade"
                href="https://www.radix-ui.com/docs/primitives/overview/accessibility"
              >
                {/* i18n */}
                Testado em vários navegadores e tecnologias assistivas.
              </ListItem>
              <ListItem
                title="Lançamentos"
                href="https://www.radix-ui.com/docs/primitives/overview/releases"
              >
                {/* i18n */}
                Lançamentos do Radix Primitives e seus changelogs.
              </ListItem>
            </StyledUlTwo>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          {/* i18n */}
          <NavigationMenu.Trigger disabled>Desabilitado</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <StyledUlTwo>
              <ListItem
                title="Introdução"
                href="https://www.radix-ui.com/docs/primitives/overview/introduction"
              >
                {/* i18n */}
                Crie sistemas de design e aplicativos da web acessíveis e de
                alta qualidade.
              </ListItem>
              <ListItem
                title="Tutorial"
                href="https://www.radix-ui.com/docs/primitives/overview/getting-started"
              >
                {/* i18n */}
                Um tutorial rápido para você começar a usar o Radix Primitives.
              </ListItem>
              <ListItem
                title="Estilo"
                href="https://www.radix-ui.com/docs/primitives/guides/styling"
              >
                {/* i18n */}
                Sem estilo e compatível com qualquer solução de estilo.
              </ListItem>
              <ListItem
                title="Animações"
                href="https://www.radix-ui.com/docs/primitives/guides/animation"
              >
                {/* i18n */}
                Use quadros-chave CSS ou qualquer biblioteca de animação de sua
                escolha.
              </ListItem>
              <ListItem
                title="Acessibilidade"
                href="https://www.radix-ui.com/docs/primitives/overview/accessibility"
              >
                {/* i18n */}
                Testado em vários navegadores e tecnologias assistivas.
              </ListItem>
              <ListItem
                title="Lançamentos"
                href="https://www.radix-ui.com/docs/primitives/overview/releases"
              >
                {/* i18n */}
                Lançamentos do Radix Primitives e seus changelogs.
              </ListItem>
            </StyledUlTwo>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </Flex>
  );
};
