import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
        />
      </FormGroup>
      <Button color="primary">Sign In</Button>
    </Form>
  );
}
