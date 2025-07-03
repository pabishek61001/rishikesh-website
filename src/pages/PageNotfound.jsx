import React from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Box >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={2}
            >
                <Paper
                    elevation={0}
                    sx={{
                        width: '100%',
                        p: { xs: 3, sm: 5 },
                        borderRadius: 4,
                        textAlign: 'center',
                        bgcolor: '#fff',
                    }}
                >
                    <Box mb={3} sx={{ justifyContent: "center", display: "flex" }}>
                        <img
                            src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740"
                            alt="Page not found"
                            style={{ width: 300, height: 300, borderRadius: 12, objectFit: "cover" }}
                        />
                    </Box>
                    <Typography variant="h5" fontWeight={500} gutterBottom>
                        Oops! Page not found.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        The page you’re looking for doesn’t exist or has been moved.
                    </Typography>

                    <Typography variant="subtitle2" color="text.secondary" mb={2}>
                        Looking for something else?
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            endIcon={<Home />}
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/')}
                        >
                            Go to Homepage
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Support
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
};

export default PageNotFound;
