import { initialUser, userReducer } from "@/hooks/userReducer";
import React, { useState, useReducer } from "react";
import { User, Settings, BarChart3, Mail, Calendar, LogIn } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

const UserProfile: React.FC = () => {
	const [user, dispatch] = useReducer(userReducer, initialUser);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleProfileUpdate = (field: string, value: string): void => {
		dispatch({
			type: "UPDATE_PROFILE",
			payload: { [field]: value },
		});
	};

	return (
		<div className='container max-w-4xl mx-auto p-6 space-y-6'>
			<div className='flex items-center gap-3 mb-6'>
				<User className='h-8 w-8 text-primary' />
				<h1 className='text-3xl font-bold tracking-tight'>User Profile</h1>
			</div>

			{/* Personal Information Card */}
			<Card>
				<CardHeader>
					<div className='flex items-center gap-2'>
						<User className='h-5 w-5 text-muted-foreground' />
						<CardTitle>Personal Information</CardTitle>
					</div>
					<CardDescription>Manage your personal details and contact information</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					{isEditing ? (
						<div className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='firstName'>First Name</Label>
								<Input
									id='firstName'
									type='text'
									value={user.personalInfo.firstName}
									onChange={(e) => handleProfileUpdate("firstName", e.target.value)}
									placeholder='First Name'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='lastName'>Last Name</Label>
								<Input
									id='lastName'
									type='text'
									value={user.personalInfo.lastName}
									onChange={(e) => handleProfileUpdate("lastName", e.target.value)}
									placeholder='Last Name'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<div className='flex items-center gap-2'>
									<Mail className='h-4 w-4 text-muted-foreground' />
									<Input
										id='email'
										type='email'
										value={user.personalInfo.email}
										onChange={(e) => handleProfileUpdate("email", e.target.value)}
										placeholder='Email'
										className='flex-1'
									/>
								</div>
							</div>
							<Button onClick={() => setIsEditing(false)} className='w-full sm:w-auto'>
								Save Changes
							</Button>
						</div>
					) : (
						<div className='space-y-3'>
							<div className='flex items-center justify-between py-2 border-b'>
								<span className='text-sm font-medium text-muted-foreground'>Name</span>
								<span className='text-sm font-semibold'>
									{user.personalInfo.firstName} {user.personalInfo.lastName}
								</span>
							</div>
							<div className='flex items-center justify-between py-2 border-b'>
								<span className='text-sm font-medium text-muted-foreground'>Email</span>
								<span className='text-sm font-semibold flex items-center gap-2'>
									<Mail className='h-4 w-4' />
									{user.personalInfo.email}
								</span>
							</div>
							<Button
								onClick={() => setIsEditing(true)}
								variant='outline'
								className='w-full sm:w-auto mt-4'
							>
								Edit Profile
							</Button>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Preferences Card */}
			<Card>
				<CardHeader>
					<div className='flex items-center gap-2'>
						<Settings className='h-5 w-5 text-muted-foreground' />
						<CardTitle>Preferences</CardTitle>
					</div>
					<CardDescription>Your personalized settings and preferences</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='space-y-3'>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground'>Theme</span>
							<Badge variant='secondary'>{user.preferences.theme}</Badge>
						</div>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground'>Notifications</span>
							<Badge variant={user.preferences.notifications ? "default" : "outline"}>
								{user.preferences.notifications ? "Enabled" : "Disabled"}
							</Badge>
						</div>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground'>Language</span>
							<Badge variant='secondary'>{user.preferences.language}</Badge>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Statistics Card */}
			<Card>
				<CardHeader>
					<div className='flex items-center gap-2'>
						<BarChart3 className='h-5 w-5 text-muted-foreground' />
						<CardTitle>Account Statistics</CardTitle>
					</div>
					<CardDescription>Track your account activity and milestones</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='space-y-3'>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground'>Login Count</span>
							<Badge className='text-base px-3 py-1'>{user.stats.loginCount}</Badge>
						</div>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground flex items-center gap-2'>
								<LogIn className='h-4 w-4' />
								Last Login
							</span>
							<span className='text-sm font-semibold'>{user.stats.lastLogin.toLocaleDateString()}</span>
						</div>
						<div className='flex items-center justify-between py-2 border-b'>
							<span className='text-sm font-medium text-muted-foreground flex items-center gap-2'>
								<Calendar className='h-4 w-4' />
								Member Since
							</span>
							<span className='text-sm font-semibold'>
								{user.stats.accountCreated.toLocaleDateString()}
							</span>
						</div>
						<Button
							onClick={() => dispatch({ type: "INCREMENT_LOGIN_COUNT" })}
							variant='outline'
							className='w-full sm:w-auto mt-4'
						>
							<LogIn className='h-4 w-4 mr-2' />
							Simulate Login
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default UserProfile;
