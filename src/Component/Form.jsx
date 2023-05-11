import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/Action/index";
import React, { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const HandleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo) {
      alert("plz fill the data");
    } else {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={"12px"}
          justifyContent={"center"}
        >
          <Input
            value={todo}
            type="text"
            placeholder="Add Task..."
            w={"20rem"}
            onChange={HandleChange}
          />
          <Box ml={"2"}>
            <Button bg={"green.400"} type="submit">
              Add
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default Form;
