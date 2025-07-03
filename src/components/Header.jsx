import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
];

const Header = () => {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const linkRefs = useRef({});
    const [highlight, setHighlight] = useState({ width: 0, left: 0 });
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Theme logic
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const scrollPos = window.scrollY + 150;
            navLinks.forEach(link => {
                const el = document.getElementById(link.id);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActive(link.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const el = linkRefs.current[active];
        if (el) {
            setHighlight({ width: el.offsetWidth, left: el.offsetLeft });
        }
    }, [active]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setDrawerOpen(false);
    };

    return (
        <header className={`fixed top-0 w-full z-50 backdrop-blur transition duration-300 ${scrolled ? "bg-white/80 dark:bg-zinc-900/80 shadow" : "bg-transparent"}`}>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white">RCS</h1>

                {/* Desktop Nav */}
                <div className="relative hidden md:flex space-x-2 text-sm font-medium px-4 items-center">
                    <motion.div
                        className="absolute h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg -z-10"
                        layout
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        style={{
                            width: highlight.width,
                            left: highlight.left,
                            top: "12%",
                            transform: "translateY(-50%)",
                        }}
                    />
                    {navLinks.map(link => (
                        <span
                            key={link.id}
                            ref={(el) => (linkRefs.current[link.id] = el)}
                            onClick={() => scrollTo(link.id)}
                            className={`px-3 py-3 cursor-pointer rounded-md transition-colors duration-300 
                ${active === link.id ? "text-black dark:text-white " : "text-zinc-600 dark:text-zinc-300 "}`}
                        >
                            {link.label}
                        </span>
                    ))}
                    <button onClick={() =>
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            // behavior: 'smooth',
                        })
                    }
                        className="ml-2 px-4 py-1 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 hover:opacity-90 transition">
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setDrawerOpen(true)} className="text-black dark:text-white">
                        <MenuIcon />
                    </button>
                </div>

                {/* Drawer */}
                <Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{ width: "100%", transform: "transiton all 10s ease" }}>
                    <Box
                        sx={{ width: 'auto', height: "100vh" }}
                        role="presentation"
                    >
                        <Box className="flex justify-between items-center p-4">
                            <h2 className="text-lg font-bold">Menu</h2>
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Divider />
                        <List>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, y: 150 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.8, ease: "easeOut" }}
                                >
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => {
                                            scrollTo(link.id);
                                            setDrawerOpen(false);
                                        }}>
                                            <ListItemText
                                                primary={link.label}
                                                primaryTypographyProps={{
                                                    align: "center",
                                                    variant: "h6",
                                                    sx: {
                                                        bgcolor: "#f8f8f8",
                                                        py: 2,
                                                        transform: "scale(0.95)",
                                                        transition: "transform 0.3s ease",
                                                        "&:hover": { transform: "scale(1)" },
                                                    },
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>


                        <Box px={2} pt={2}>
                            {/* <motion.div
                                initial={{ opacity: 0, y: 160 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            > */}
                            <Button
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.body.scrollHeight,
                                        // behavior: 'smooth',
                                    })
                                }
                                size="larger"
                                fullWidth
                                variant="contained"
                                sx={{
                                    px: 2,
                                    py: 2,
                                    fontSize: "1rem",
                                    background: "linear-gradient(to right, #8b5cf6, #3b82f6)",
                                    color: "#fff",
                                    textTransform: "none",
                                    borderRadius: 2,
                                }}
                            >
                                Let's Talk
                            </Button>
                            {/* </motion.div> */}
                        </Box>
                    </Box>
                </Drawer>
            </nav>
        </header>
    );
};

export default Header;
