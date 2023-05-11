import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { deleteTodo } from "../store/Action/index";

const TableData = () => {
  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      {list && list.length > 0 ? (
        <TableContainer spacing={8} mx={"auto"} maxW={"xl"} px={6} mt={"5"}>
          <Table variant="simple">
            <Thead bg={"blue.800"}>
              <Tr>
                <Th>No</Th>
                <Th>Task</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>

            {list &&
              list.map((ele, index) => {
                return (
                  <>
                    <Tbody key={ele.id}>
                      <Tr>
                        <Td>{(index = index + 1)}</Td>
                        <Td>{ele.data}</Td>
                        <Td>
                          <Button
                            bg={"red.500"}
                            px={"4"}
                            onClick={() => dispatch(deleteTodo(ele.id))}
                          >
                            Delete
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </>
                );
              })}
          </Table>
        </TableContainer>
      ) : (
        <Text align={"center"}>No Task </Text>
      )}
    </>
  );
};

export default TableData;
