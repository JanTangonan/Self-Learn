// Suggested code may be subject to a license. Learn more: ~LicenseLog:2854387724.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3258127771.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3141994406.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1770673185.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3626881557.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4033610371.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:908894549.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3579686482.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Passwords must match").required("Confirm Password is required"),
});

export const Form = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={show ? "blackAlpha.900" : "gray.100"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={"white"}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Input
              {...register("name")}
              id="name"
              placeholder="name"
              focusBorderColor="blue.400"
            />
            {errors.name && <Text color="red">{errors.name.message}</Text>}
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="email"
              focusBorderColor="blue.400"
            />
            {errors.email && <Text color="red">{errors.email.message}</Text>}
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="password"
              focusBorderColor="blue.400"
            />
            {errors.password && <Text color="red">{errors.password.message}</Text>}
            <Input
              {...register("confirmPassword")}
              id="confirmPassword"
              type="password"
              placeholder="confirm password"
              focusBorderColor="blue.400"
            />
            {errors.confirmPassword && <Text color="red">{errors.confirmPassword.message}</Text>}
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign up
                </Button>
              </Stack>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
