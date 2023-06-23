import { useTheme, ActionMenu, ActionList, Box } from "@primer/react"
import { SunIcon, MoonIcon, Icon } from "@primer/octicons-react"

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()

    const setScheme = (schemeValue: string) => {
        setDayScheme(schemeValue);
        setNightScheme(schemeValue);
    }

    const schemes: Scheme[] = [
        {
            name: 'Light',
            value: 'light',
            icon: SunIcon,
        },
        {
            name: 'Dark',
            value: 'dark',
            icon: MoonIcon,
        },
    ]

    const current = schemes.find((scheme) => scheme.value === colorScheme)

    return (
        <Box position="absolute" top={0} right={0} p={3}>
            <Box position="relative" display="flex" justifyContent="flex-end">
                <ActionMenu>
                    <ActionMenu.Button size="small">
                        {current && <current.icon />}
                        <Box display="inline-block" ml={2}>
                            {' '}
                            {current?.name}
                        </Box>
                    </ActionMenu.Button>
                    <ActionMenu.Overlay>
                        <ActionList showDividers>
                            <ActionList.Group selectionVariant="single">
                                {schemes.map((scheme) => (
                                    <ActionList.Item
                                        key={scheme.value}
                                        selected={scheme.value === colorScheme}
                                        onSelect={() => setScheme(scheme.value)}
                                    >
                                        {scheme.name}
                                    </ActionList.Item>
                                ))}
                            </ActionList.Group>
                        </ActionList>
                    </ActionMenu.Overlay>
                </ActionMenu>
            </Box>
        </Box>
    )
}

interface Scheme {
  name: string;
  value: string;
  icon: Icon;
}

export default ColorModeSwitcher