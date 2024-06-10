import { Grid, GridItem } from "@chakra-ui/react";


export default function DashBoard() {
    return (
        <Grid
            h="1200px"
            templateRows="repeat(12, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
        >
            <GridItem rowSpan={12} colSpan={1} bg="tomato" />
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={2} bg="papayawhip" />
            <GridItem colSpan={4} bg="tomato" />
        </Grid>
    );
    }