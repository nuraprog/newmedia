import React, { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"

interface FormtestProps {}

interface IShippingField {
  email: string
  username: string
  name: string
  location: {
    country: string
    city: string
  }
}

const Formtest: FC<FormtestProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    getValues,
    getFieldState,
    watch,
    setValue
  } = useForm<IShippingField>({
    defaultValues: {
      email: "itscraftings@gmail.com"
    },
    mode: "onSubmit"
  })

  const onSubmit: SubmitHandler<IShippingField> = data => {
    alert("Your name: " + data.name)
    resetField("name")
  }

  console.log("Values", getValues("name"))
  console.log("FieldState", getFieldState("name"))

  // watch
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type))

  //   return () => subscription.unsubscribe()
  // }, [watch])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Name is required!"
          })}
          placeholder="name"
          type="text"
        />
        {errors?.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
        <input
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.]^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter valid email!"
            }
          })}
          placeholder="email"
          type="text"
        />
        {errors?.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
        <div>
          <button>Send</button>
        </div>
      </form>

      <div>
        <button
          onClick={() => {
            setValue("name", "Max")
            setValue("email", "test@mail.ru")
          }}
        >
          Fill data
        </button>
      </div>
    </div>
  )
}

export default Formtest
