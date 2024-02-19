import React, { FC, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import airplaneIcon from "../../assets/AirplaneIcon.svg";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_9bwd41f",
				"template_ra0uwj7",
				{
					from_name: form.name,
					to_name: "Julian",
					from_email: form.email,
					to_email: "bristoljulian.r+portfolioPages@gmail.com",
					message: form.message,
				},
				"OlSnfvmPWtVDrhrgi"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert(
						"Something went wrong with my email service. Send me an email directly at bristoljulian.r@gmail.com"
					);
				}
			);
	};

	return (
		<div className="text-hope-100 mx-4 pb-[100px]">
			<h2 className="mb-4 text-center text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[84px] textTransition">
				Contact Me
			</h2>
			<p className="mb-2 mx-0 sm:mx-12 text-center text-[18px] sm:text-[22px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] textTransition">
				Please contact me directly at{" "}
				<a
					className="text-marigold underline hover:text-creme"
					href="mailto:HireJulianB@gmail.com"
				>
					HireJulianB@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="flex flex-col mx-0 sm:mx-12"
			>
				<label htmlFor="name" className="flex flex-col">
					<span className="text-[20px] mx-8">Name</span>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Your name"
						className="mx-4 mb-4 p-4 rounded-2xl text-[18px] text-ash"
						required={true}
					/>
				</label>
				<label htmlFor="email" className="flex flex-col">
					<span className="text-[20px] mx-8">Email</span>
					<input
						type="email"
						name="email"
						id="email"
						value={form.email}
						onChange={handleChange}
						placeholder="Your email"
						className="mx-4 mb-4 p-4 rounded-2xl text-[18px] text-ash"
						required={true}
					/>
				</label>
				<label htmlFor="message" className="flex flex-col">
					<span className="text-[20px] mx-8">Message</span>
					<textarea
						rows={7}
						name="message"
						id="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Your message"
						className="mx-4 mb-4 p-4 rounded-2xl text-[18px] text-ash"
						required={true}
					/>
				</label>
				<button
					className="bg-morocco mt-4 mb-2 p-2 sm:px-3 lg:px-4 lg:py-2 text-[16px] sm:text-[24px] xl:text-[32px] textTransition rounded-md w-fit self-center transition active:btnClick hover:bg-gradient-to-b hover:from-marigold hover:to-morocco focus:bg-gradient-to-b focus:from-marigold focus:to-morocco text-ash"
					type="submit"
				>
					{loading ? (
						"Sending..."
					) : (
						<span className="flex">
							Submit
							<Image
								className="ml-1 w-[16px] sm:w-[24px] xl:w-[32px] transition-all"
								src={airplaneIcon}
								alt="airplane icon"
							/>
						</span>
					)}
				</button>
			</form>
		</div>
	);
};

export default Contact;
