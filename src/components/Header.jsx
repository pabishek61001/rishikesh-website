import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
];

const Header = () => {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const linkRefs = useRef({});
    const [highlight, setHighlight] = useState({ width: 0, left: 0 });
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Toggle Theme Logic
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const scrollPos = window.scrollY + 150;
            navLinks.forEach((link) => {
                const el = document.getElementById(link.id);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActive(link.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Highlight Box Calculation
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

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
        setDrawerOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm   dark:border-zinc-800/50"
                : "bg-transparent"
                }`}
        >
            <nav className="w-full mx-auto px-6 py-4 flex justify-between items-center relative">
                {/* Logo */}
                <div
                    onClick={() => scrollTo("home")}
                    className="cursor-pointer flex items-center gap-2 group"
                >
                    <span className="text-xl font-extrabold tracking-wider text-zinc-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        RCS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1 relative bg-zinc-100/80 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60">
                    {/* Active Spring Highlight Pill */}
                    <motion.div
                        className="absolute h-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm -z-0"
                        layout
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        style={{
                            width: highlight.width,
                            left: highlight.left,
                        }}
                    />

                    {navLinks.map((link) => (
                        <span
                            key={link.id}
                            ref={(el) => (linkRefs.current[link.id] = el)}
                            onClick={() => scrollTo(link.id)}
                            className={`relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer rounded-xl transition-colors duration-200 select-none ${active === link.id
                                ? "text-zinc-900 dark:text-white"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                                }`}
                        >
                            {link.label}
                        </span>
                    ))}
                </div>

                {/* Right Actions: Theme Toggle + CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-orange-400 border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer"
                        title="Toggle Light/Dark Theme"
                    >
                        {theme === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                    </button>

                    {/* Let's Talk CTA */}
                    <button
                        onClick={scrollToBottom}
                        className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-violet-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Header Actions */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                    >
                        {theme === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
                    </button>

                    <IconButton onClick={() => setDrawerOpen(true)} >
                        <MenuIcon className="text-zinc-900 dark:text-white" />
                    </IconButton>
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    PaperProps={{
                        sx: {
                            width: "80%",
                            maxWidth: "360px",
                            backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
                            color: theme === "dark" ? "#ffffff" : "#09090b",
                        },
                    }}
                >
                    <Box className="flex flex-col h-full p-6 justify-between">
                        {/* Drawer Top Header */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold tracking-wider">Navigation</span>
                                <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "inherit" }}>
                                    <CloseIcon />
                                </IconButton>
                            </div>

                            <Divider className="mb-6 border-zinc-200 dark:border-zinc-800" />

                            {/* Navigation List */}
                            <List className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                                    >
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                onClick={() => scrollTo(link.id)}
                                                sx={{
                                                    borderRadius: 2,
                                                    py: 1.5,
                                                    backgroundColor: active === link.id ? (theme === "dark" ? "#18181b" : "#f4f4f5") : "transparent",
                                                }}
                                            >
                                                <ListItemText
                                                    primary={link.label}
                                                    primaryTypographyProps={{
                                                        fontWeight: active === link.id ? "bold" : "medium",
                                                        fontSize: "1rem",
                                                        color: active === link.id ? "#0284c7" : "inherit",
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    </motion.div>
                                ))}
                            </List>
                        </div>

                        {/* Mobile Bottom CTA */}
                        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                            <button
                                onClick={scrollToBottom}
                                className="w-full py-3.5 text-sm font-bold uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </Box>
                </Drawer>
            </nav>
        </header>
    );
};

export default Header;