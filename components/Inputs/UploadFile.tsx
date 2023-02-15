import {FileInput, Label} from "flowbite-react";

interface IComUpload {
    label: string;
    hint?: string | boolean;
    accept?: string;
    value: any;
    setValue: any;
}

function UploadFile({ label, accept, hint = false, value, setValue } : IComUpload) {
    return (
        <div id="fileUpload" className="mx-2">
            <div className="mb-2">
                <Label htmlFor="file" value={label} />
            </div>

            <FileInput
                onChange={setValue}
                accept={accept}
                value={value}
                id="file"
                helperText={hint ? hint : "Upload a file"}
            />
        </div>
    );

}

export default UploadFile;
