'use client'
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompensationSubmission } from "@/schemas/compensationSchema"
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { states } from "@/_data/_statesArray";
import { hospitals } from "@/_data/_hospitals";
import { medicalSpecialties } from "@/_data/_specialties";
import { postCompensation } from "@/utils/postCompensation";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  specialty: z
    .string()
    .nonempty("Specialty is required"),
  yearsPostTraining: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0, "Value must be greater than or equal to zero"),
  totalCompensation: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  baseSalary: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0)
    .optional(),
  annualBonus: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0)
    .optional(),
  isFullTime: z
    .string()
    .nonempty("Full Time or Part Time employment is required."),
  hoursPerWeek: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  vacationWeeksAnnually: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  city: z
    .string()
    .regex(/^[^\d]+$/, "Must not contain numbers"),
  state: z
    .string()
    .nonempty("State is required."),
  hospital: z
    .string()
    .nonempty("Hospital is required."),
  signedNonCompete: z
    .boolean()
    .default(false),
  providerGender: z
    .string()
    .nonempty("Gender is required."),
  freeText: z
    .string()
    .optional(),
});

type Props = {
  closeModal: () => void
}

type FormValues = CompensationSubmission

export default function SalaryForm({ closeModal }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // const isFullTime = useWatch({
  //   control: form.control,
  //   name: "isFullTime",
  //   defaultValue: "",
  // });

  const onSubmit: SubmitHandler<FormValues> = async (
    values,
    event
  ) => {
    event!.preventDefault()
    const compensationData: CompensationSubmission = {
      specialty: values.specialty as string,
      yearsPostTraining: values.yearsPostTraining as number,
      totalCompensation: values.totalCompensation as number,
      baseSalary: values.baseSalary as number || null,
      annualBonus: values.annualBonus as number || null,
      isFullTime: values.isFullTime as string,
      hoursPerWeek: values.hoursPerWeek as number,
      vacationWeeksAnnually: values.vacationWeeksAnnually as number,
      city: values.city!.trim().toLowerCase() as string,
      state: values.state as string,
      hospital: values.hospital as string,
      signedNonCompete: values.signedNonCompete as boolean,
      providerGender: values.providerGender as string,
      freeText: values.freeText as string || null
    };

    setSubmitting(true);

    try {
      const message = await postCompensation(compensationData)
      setSubmitSuccess(true)
      setSubmitSuccessMessage(message as string)
      form.reset()
      closeModal()
    } catch (error) {
      setSubmitError(error as string)
    } finally {
      setSubmitting(false)
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-col space-x-2 space-y-2 md:grid md:grid-cols-3 md:space-y-1 md:gap-6">
          {selectedHospital != "" &&
            (<FormField
              control={form.control}
              name="hospital"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital</FormLabel>
                  <Select
                    onValueChange={value => {
                      field.onChange(value);
                      setSelectedHospital(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-40">
                      {hospitals.map(hospital => (
                        <SelectItem
                          key={hospital}
                          value={hospital}
                        >
                          {hospital}
                        </SelectItem>
                      ))}
                      <SelectItem value="" className="font-semibold text-blue-600">Other, Please Specify</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Hospital you currently work at.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />)}
          {selectedHospital === "" &&
            (<FormField
              control={form.control}
              name="hospital"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Other Hospital Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Hospital" type="text" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your hospital name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />)}
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialty</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="max-h-40"
                  >
                    {medicalSpecialties.map(specialty => (
                      <SelectItem
                        key={specialty}
                        value={specialty}
                      >
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Your medical specialty.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsPostTraining"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years Experience</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 5"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Number of years post residency as a whole number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalCompensation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Comp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $150,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your last year&apos;s full compensation.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baseSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yearly Base Salary</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $100,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If possible, provide your non-variable compensation.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="annualBonus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yearly Bonus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $50,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If possible, provide the portion of your pay which varied, or was tied to performance.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isFullTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>FT / PT Employment</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Full Time">
                      Full Time
                    </SelectItem>
                    <SelectItem value="Part Time">
                      Part Time
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Are you full time or part time?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hoursPerWeek"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weekly Hours</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 40"
                    type="number"
                    min={0}
                    // disabled={isFullTime !== 'Part Time'}
                    // className={isFullTime !== 'Part Time' ? 'bg-gray-200' : ''}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Hours worked per week.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vacationWeeksAnnually"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weeks Vacation</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 4"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Number of vacation weeks granted annually.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Seattle"
                    type="text"
                    pattern="^[^\d]+$"
                    title="Must not contain numbers."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  City of your current employer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="max-h-40"
                  >
                    {states.map(state => (
                      <SelectItem
                        key={state}
                        value={state}
                      >
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  State of your current employer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="providerGender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">
                      Male
                    </SelectItem>
                    <SelectItem value="Female">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This information will not be shared and is for statistical purposes only.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="signedNonCompete"
            render={({ field }) => (
              <FormItem className="flex flex-row space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    className=""
                    checked={field.value === true}
                    onCheckedChange={(isChecked) => {
                      const newValue =
                        isChecked === "indeterminate" ? true : isChecked;
                      field.onChange(newValue);
                    }}
                  />
                </FormControl>
                <FormDescription className="text-slate-600">
                  Did you have to sign a non-compete agreement?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="freeText"
            render={({ field }) => (
              <FormItem className="col-span-2 pb-2">
                <FormLabel>Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Anything else you want us to know?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            variant="secondary"
            className="px-4 py-2 mx-2 rounded-md"
            onClick={closeModal}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="default"
            className="px-4 py-2 mx-2 text-white bg-blue-600 rounded-md"
          >
            Submit
          </Button>
        </div>
      </form>
      {submitSuccess && (
        <div className="text-center text-green-500">
          {submitSuccessMessage}
        </div>
      )}
      {submitError && (
        <div className="text-center text-red-500">
          {submitError}
        </div>
      )}
    </Form>
  );
}
