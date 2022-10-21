import React from "react";
import { Skeleton } from "@mui/material"
import Card from '@mui/material/Card';
import { Container } from '@mui/system'

export const Skeletons = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom:"1em"}}/>
        </Container>
    )
}