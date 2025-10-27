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
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(data);
	};

	console.log("error: ", errors);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='grid gap-2'>
				<div>
					<Input
						type='text'
						placeholder='Enter your first name...'
						{...register("firstName", { required: "First name cannot be empty" })}
					/>

					{errors.firstName && <p className='text-red-500'>{errors.firstName?.message}</p>}
				</div>

				<div>
					<Input
						type='text'
						placeholder='Enter your last name...'
						{...register("lastName", { required: "Last name cannot be empty" })}
					/>
					{errors.lastName && <p className='text-red-500'>{errors.lastName?.message}</p>}
				</div>

				<div>
					<Input
						type='email'
						placeholder='Enter your email...'
						{...register("email", { required: "Email cannot be empty" })}
					/>
					{errors.email?.message && <p className='text-red-500'>{errors.email?.message}</p>}
				</div>

				<div>
					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "Submit"}
					</Button>
				</div>
			</form>
		</>
	);
}
