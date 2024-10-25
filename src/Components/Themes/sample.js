import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Sample() {
    return (
        <div>
            <Container maxWidth="xl" >
                {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} > */}
                <Grid container spacing={2} justifyContent="center">
                    <Grid >
                        <Typography color='' variant='p'
                            sx={{
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                            }}
                        >In today’s fast-paced world, technology plays a crucial role in shaping
                            the way we live, work, and communicate. From smartphones to artificial intelligence, the rapid advancements in tech have transformed
                            industries and daily life in ways we could hardly imagine a few decades ago.
                            These innovations have not only made information more accessible but have also fostered
                            global connections, creating opportunities for collaboration across borders. However, with these
                            advancements come new challenges, such as data privacy concerns and the growing need for digital literacy.
                            As we continue to embrace technological progress, it’s essential to balance innovation with responsible use,
                            ensuring that the benefits of technology are accessible to all while minimizing potential risks.</Typography> <br />
                            <Button variant='contained' color='primary'>Hello</Button>
                            <Button variant='contained' color='secondary' sx={{marginLeft: '10px', borderRadius: '20px'}}>Hello</Button>
                            <Button variant='contained' color='success' sx={{marginLeft: '10px', borderRadius: '20px', color: '#ffffff'}}>Hello</Button>
                            <Button variant='contained' color='error' sx={{marginLeft: '10px', borderRadius: '20px', color: '#ffffff',}}>Hello</Button>
                            <Button variant='contained' color='warning' sx={{marginLeft: '10px', borderRadius: '20px', color: '#ffffff',}}>Hello</Button>
                    </Grid>

                </Grid>
                {/* </Box> */}
            </Container>
        </div>
    );
}

export default Sample;