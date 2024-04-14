import Input from '../../core-components/input/Input'
import Apple from '../../assets/logo/apple.png'
import CheckBox from '../../core-components/checkbox/CheckBox'
import Select from '../../core-components/dropdown/Select'
import Label from '../../core-components/label/Label'
import Button from '../../core-components/button/Button'

const Registration = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src={Apple}
            className="border-2 border-red-600 p-1 rounded-full mx-auto h-16 w-auto" alt="signup logo"
          ></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" type="text" required></Input>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email"></Input>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-sm">
                  <a href="http://google.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <Input name="password" id="password" type="password" placeholder="Passwrod"></Input>
              </div>
            </div>
            <div>
              <CheckBox>Check it if you like the Sky !!!</CheckBox>
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select id="gender" optionItems={['Male', 'Female']}></Select>
            </div>
            <div>
              <Label>Employment Status</Label>
              <div className="flex">
                <div className="flex gap-2 justify-start p-1">
                  <Input type="radio" id="student" name="employment_status"></Input>
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex gap-2 justify-start p-1">
                  <Input type="radio" id="employed" name="employment_status"></Input>
                  <Label htmlFor="employed">Employed</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="">Date of Birth</Label>
              <Input type="date"></Input>
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration
