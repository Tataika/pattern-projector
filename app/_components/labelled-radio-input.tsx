import { ChangeEvent } from "react";

/**
 * Labelled radio input
 * @param defaultChecked - Sets the radio input as checked or unchecked
 * @param id - Global html attribute that must be unique to the document
 * @param inputTestId - ID for the input used for testing
 * @param label - Input label visible to the user
 * @param name - Name submitted with the form
 */
export default function LabelledRadioInput({
  checked = false,
  handleChange,
  id,
  inputTestId,
  label,
  name,
}: {
  checked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  inputTestId: string;
  label: string;
  name: string;
}) {
  return (
    <div className="inline-flex rounded">
      <input
        className="hidden peer"
        data-test-id={inputTestId}
        checked={checked}
        id={id}
        name={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        type="radio"
      />
      <label
        className="text-sm font-medium radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:outline-1 hover:outline hover:outline-gray-300 peer-checked:bg-indigo-500 peer-checked:hover:bg-indigo-700 peer-checked:text-white"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
