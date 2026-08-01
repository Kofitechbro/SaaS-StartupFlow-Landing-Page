import { Buttons } from '../Buttons/Buttons';
import { Input } from '../Input/Input';

export function Form() {
  return (
    <form>
        <h3>Sign In</h3>
        <p>Create an Account to Get Started</p>
      <Input
        label="Username"
        type="text"
        placeholder="John Doe"
        size="small"
        variant='outline'
      />
      <Input
        label="Email"
        type="email"
        placeholder="johndoe@example.com"
        size="small"
        variant='outline'
      />

      <Buttons type='submit' size='small' variant='primary'>
        Sign up
      </Buttons>
    </form>
  );
}
