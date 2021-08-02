import { Grid, GridItem } from '@chakra-ui/react';
import { Type } from './Type';

export const TravelTypes = () => {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="center"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW={1160}
      gap={[1, 5]}
    >
      <GridItem>
        <Type icon="cocktail" label="vida noturna" />
      </GridItem>
      <GridItem>
        <Type icon="surf" label="praia" />
      </GridItem>
      <GridItem>
        <Type icon="building" label="modern" />
      </GridItem>
      <GridItem>
        <Type icon="museum" label="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" label="e mais..." />
      </GridItem>
    </Grid>
  );
};
