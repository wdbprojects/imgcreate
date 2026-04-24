"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader2, Lock, Save } from "lucide-react";
import { useState, useTransition } from "react";

const UserSettingsForm = ({
  // userId,
  email,
  name,
}: {
  userId: string;
  email: string;
  name: string;
}) => {
  const [newName, setNewName] = useState("");
  const [loadingChangeName, changeNameTransition] = useTransition();
  const [newEmail, setNewEmail] = useState("");
  const [loadingChangeEmail, changeEmailTransition] = useTransition();

  console.log(name);

  const changeName = () => {
    changeNameTransition(async () => {
      console.log("change name");
    });
  };
  const changeEmail = () => {
    changeEmailTransition(async () => {
      console.log("change email");
    });
  };

  return (
    <div className="mt-8">
      <div className="flex w-full flex-col items-center gap-8">
        {/* NAME */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Name</CardTitle>
            <CardDescription className="text-xs">
              Change your name below and press{" "}
              <Badge variant="outline" className="ml-2 rounded-sm">
                change name
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">Current Name</FieldLabel>
              <Input id="name" type="text" value={name} disabled={true} />
            </Field>
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">New Name</FieldLabel>
              <Input
                id="name"
                type="text"
                value={newName}
                onChange={(event) => {
                  setNewName(event?.target.value);
                }}
                placeholder="Type your new name"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Your name has to be at least 3 characters
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={changeName}
              disabled={loadingChangeName}
            >
              {loadingChangeEmail ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Save className="size-3.5" />
                  <span>Change Name</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* EMAIL */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Email</CardTitle>
            <CardDescription className="text-xs">
              Change your email below and press{" "}
              <Badge variant="outline" className="ml-2 rounded-sm">
                change email
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">Current Email</FieldLabel>
              <Input id="email" type="text" value={email} disabled={true} />
            </Field>
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">New Email</FieldLabel>
              <Input
                id="email"
                type="text"
                value={newEmail}
                onChange={(event) => {
                  setNewEmail(event?.target.value);
                }}
                placeholder="Type your new email"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Please use a valid email address
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={changeEmail}
              disabled={loadingChangeEmail}
            >
              {loadingChangeEmail ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Save className="size-3.5" />
                  <span>Change Email</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* PASSWORD */}
        <Card className="w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle className="text-sm">Change Password</CardTitle>
            <CardDescription className="text-xs">
              Enter your current password and a new password{" "}
              <Badge variant="outline" className="ml-2 rounded-sm">
                save
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">
                Current Password
              </FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Current Password"
                className="placeholder:text-xs"
              />
            </Field>
            <Field className="mb-1 flex flex-col gap-1">
              <FieldLabel className="mb-1! text-xs">New Password</FieldLabel>
              <Input
                id="newPassword"
                type="password"
                placeholder="New Password"
                className="placeholder:text-xs"
              />
            </Field>
          </CardContent>
          <CardFooter className="bg-muted flex items-center justify-between rounded-b-lg py-2">
            <p className="text-muted-foreground text-sm">
              Please use 8 characters at minimum
            </p>
            <Button
              size="sm"
              className="min-w-20 text-xs"
              variant="default"
              onClick={() => {}}
              disabled={false}
            >
              {false ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Lock className="size-3.5" />
                  <span>Change Password</span>
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>
        {/* DELETE ACCOUNT */}
        <Card className="border-destructive w-full pb-0! md:w-xl">
          <CardHeader>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription className="text-xs">
              Permanently remove your account and all of its contents. This
              action is not reversible, so please continue with caution.
            </CardDescription>
          </CardHeader>
          <CardFooter className="bg-destructive/20 flex items-center justify-end rounded-b-lg border-transparent py-2">
            <Button variant="destructive" className="min-w-20 text-xs">
              Delete Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserSettingsForm;
