import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
}

export default function BasicForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormData>();

	const onSubmit = async (data: FormData) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input
						type='text'
						{...register("firstName", { required: "First name should not be empty" })}
						placeholder='Enter your firstname...'
					/>
					{errors.firstName?.message && <p className={"text-red-500"}>{errors.firstName?.message}</p>}
				</div>

				<div>
					<Input
						type='text'
						{...register("lastName", { required: "Last name should not be empty" })}
						placeholder='Enter your lastname...'
					/>
					{errors.lastName?.message && <p className={"text-red-500"}>{errors.lastName?.message}</p>}
				</div>

				<div>
					<Input
						type='email'
						{...register("email", { required: "Email should not be empty" })}
						placeholder='Enter your email...'
					/>
					{errors.email?.message && <p className={"text-red-500"}>{errors.email?.message}</p>}
				</div>

				<br />

				<div>
					<Button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</Button>
				</div>
			</form>
		</>
	);
}
