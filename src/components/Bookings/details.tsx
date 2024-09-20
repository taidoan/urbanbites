type NameFieldProps = {
  name: string,
  onNameChange: (name: string) => void
}

export const NameField = ({name, onNameChange}: NameFieldProps) => {
  return(
    <input type="text" placeholder="Please enter your name" value={name} onChange={(event) => onNameChange(event.target.value)} required />
  )
}

type EmailFieldProps = {
  email: string,
  onEmailChange: (email: string) => void
}

export const EmailField = ({email, onEmailChange}: EmailFieldProps) => {
  return (
    <input type="email" placeholder="Please enter your email" value={email} onChange={(event) => onEmailChange(event.target.value)} required/>
  )
}

type PhoneFieldProps = {
  phone: string,
  onPhoneChange: (phone: string) => void
}

export const PhoneField = ({phone, onPhoneChange}: PhoneFieldProps) => {
  return (
    <input type="number" placeholder="Please enter your phone number" value={phone} onChange={(event) => onPhoneChange(event.target.value)} required />
  )
}
