import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaSearch, FaUser } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="ft.header" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h1" fontSize="2xl" fontFamily="serif">Financial Times</Heading>
            <HStack spacing={4}>
              <Link>Home</Link>
              <Link>World</Link>
              <Link>Business</Link>
              <Link>Markets</Link>
              <FaSearch />
              <FaUser />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8} bg="ft.background">
        <VStack spacing={8} align="stretch">
          {/* Featured Article */}
          <Box>
            <Heading as="h2" fontSize="3xl" fontFamily="serif" mb={4}>Featured Article</Heading>
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
            <Heading as="h3" fontSize="2xl" fontFamily="serif" mb={2}>Lorem ipsum dolor sit amet</Heading>
            <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Box>

          {/* Other Articles */}
          <Flex flexWrap="wrap" justifyContent="space-between">
            {[1, 2, 3].map((item) => (
              <Box key={item} width={["100%", "30%"]} mb={8}>
                <Image src={`https://via.placeholder.com/300x200?text=Article ${item}`} alt={`Article ${item}`} mb={2} />
                <Heading as="h4" fontSize="xl" fontFamily="serif" mb={2}>Article Title {item}</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="ft.background" py={4}>
        <Container maxW="container.xl">
          <Text textAlign="center">&copy; 2023 Financial Times. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;