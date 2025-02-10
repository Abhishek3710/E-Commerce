import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "./errorApi";
import { useState } from "react";

const AboutPage = () => {
  const [validationError, SetValidationError] = useState<string[]>([]);
  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();

  const getValidation = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error && typeof (error as {'message': unknown}).message==='string') {
        const errorArray = (error as {'message':string}).message.split(", ");
        SetValidationError(errorArray);
      }
    }
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Error for testing
      </Typography>
      <ButtonGroup>
        <Button variant="contained" onClick={() => trigger400Error()}>
          Test 400 Error
        </Button>
        <Button variant="contained" onClick={() => trigger401Error()}>
          Test 401 Error
        </Button>
        <Button variant="contained" onClick={() => trigger404Error()}>
          Test 404 Error
        </Button>
        <Button variant="contained" onClick={() => trigger500Error()}>
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidation}>
          Test validation Error
        </Button>
      </ButtonGroup>
      {validationError.length>0 && (
        <Alert severity="error">
          <AlertTitle>
            Validation errors
          </AlertTitle>
          <List>
            {validationError.map((error, index)=>(
              <ListItem key={index}>{error}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default AboutPage;
