import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconifyIcon from "components/base/IconifyIcon";
import Image from "components/base/Image";
import LogoImg from "assets/images/logo.svg";

interface TopbarLeftProps {
    isClosing: boolean;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopbarLeft = ({isClosing, mobileOpen, setMobileOpen}: TopbarLeftProps) => {
    const handleDrawerToggle = () => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Stack spacing={2} alignItems="center">
            {/* sidbar toggle btn */}
            <Toolbar sx={{display: { xm: 'block', lg: 'none' }}}>
                <IconButton size="medium" edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                    <IconifyIcon icon={'ion:menu'}/>
                </IconButton>
            </Toolbar>

            <ButtonBase component={Link} href="/" sx={{display: { xm: 'block', lg: 'none' }}}>
                <Image src={LogoImg} alt="logo" sx={{height: 24, width: 24}}/>
            </ButtonBase>

            {/* search button */}
            <IconButton size="medium" edge="start" color="inherit" sx={{display: { xs: 'flex', md: 'none' }}}>
                <IconifyIcon icon={'ion:search'}/>
            </IconButton>

            {/* search bar */}
            <TextField
                variant="filled"
                placeholder="Type here..."
                sx={{ml: {md: 1.8, lg: 0}, display: {xs: 'none', md: 'block'}}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconifyIcon icon={'ion:search'} sx={{color: 'grey.700'}}/>
                        </InputAdornment>
                    ),
                }}
            />
        </Stack>
    );
}

export default TopbarLeft;