import { Container,
    TextInput,
     Checkbox, 
     Button, 
     Group,
      Box,PasswordInput 
    } from '@mantine/core'
import React from 'react'
import { useForm } from '@mantine/form';


function RegisterComponent() {
    const form = useForm({
        initialValues: {
          name: '',  
          email: '',
          age : 0,
          password: 'secret',
          confirmPassword: 'sevret',
          
        },
    
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),

            confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
        },
  });
  return (
    <Container>
        <Box maw={500} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                  withAsterisk
                  label="Name"
                  placeholder="กรุณากรอกชื่อ"
                  {...form.getInputProps('name')}
            />
            <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps('email')}
            />
            <TextInput
                  type='number'
                  withAsterisk
                  label="Age"
                  placeholder="กรุณากรอกอายุ"
                  {...form.getInputProps('age')}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Password"
                  {...form.getInputProps('password')}
                />
        
                <PasswordInput
                  mt="sm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  {...form.getInputProps('confirmPassword')}
                
            />
            </form>
        </Box>    
    </Container>
  );
}


export default RegisterComponent