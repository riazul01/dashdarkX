import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NavLink from "./NavLink";

interface navLinksProps {
    title: string,
    navLinks: {path: string, name: string, icon: string}[]
}

const SidebarLinks = ({ title, navLinks }: navLinksProps) => {
    return (
        <Stack direction="column" sx={(theme) => ({mt: theme.spacing(2.75)})}>
            {title && <Typography variant="caption" color="gray.700" sx={(theme) => ({mb: theme.spacing(2), ml: theme.spacing(2), textTransform: 'uppercase'})}>{title}</Typography>}
            {navLinks.map((item, index) => {
                return <NavLink key={index} path={item.path} name={item.name} icon={item.icon}/>
            })}
        </Stack>
    );
}

export default SidebarLinks;