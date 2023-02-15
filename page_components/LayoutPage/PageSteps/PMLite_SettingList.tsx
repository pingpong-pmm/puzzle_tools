import ComSelect from "../../../components/Inputs/Select";
import ComInput from "../../../components/Inputs/Input";
import ComInputMultiLine from "../../../components/Inputs/InputMultiline";
import ComRange from "../../../components/Inputs/Range";
import DragAndDropBoardList from "../Components/DragAndDropBoardList";
import { form } from "../Components/Variables";
import { Checkbox, FileInput, Label } from "flowbite-react";

import { useState } from "react";
import ToastComponent from "../../../components/utils/toast";
import Image from "next/legacy/image";


export default function PMLite_SettingList({
  generalValueSource,
  specificValueSource,
  formToUse,
  changeValue,
  deleteBoard,
  toProcess,
  setToProcess,
  curId,
  setCurId,
  token,
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastInfo, setToastInfo] = useState({
    isVisible: false,
    message: "",
    isError: false,
  });

  const createForm = (ee, id, target: any = false) => {
    switch (ee.type) {
      case "select":
        return (
          <ComSelect
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.options}
          />
        );
      case "input":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "number":
        return (
          <ComInput
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            type="number"
          />
        );
      case "multinp":
        return (
          <ComInputMultiLine
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
          />
        );
      case "range":
        return (
          <ComRange
            icon="wrench"
            key={id}
            label={ee.title}
            value={
              target
                ? generalValueSource[target][ee.id]
                : specificValueSource[ee.id]
            }
            setValue={changeValue(ee.id, target)}
            options={ee.range}
          />
        );
    }
  };

  let borderSettings = generalValueSource.general.page_border;

  const fileInputChanged = (event) => {
    // TODO
    // if (event.target.files[0]) {
    //   setIsLoading(true);
    //   const formData = new FormData();
    //
    //   formData.append("upload", event.target.files[0]);
    //   _request({
    //     token: token,
    //     url: `/api/upload/tmp/icons`,
    //     method: "POST",
    //     body: formData,
    //   })
    //     .then((res) => {
    //       axios
    //         .get(res.url, { responseType: "blob" })
    //         .then(function (response) {
    //           var reader = new window.FileReader();
    //           reader.readAsDataURL(response.data);
    //           reader.onload = function () {
    //             var imageDataUrl = reader.result;
    //             console.log(imageDataUrl);
    //           };
    //         });
    //       setToastInfo({
    //         isVisible: true,
    //         message: "Icon Successfully uploaded",
    //         isError: false,
    //       });
    //       borderSettings.imageUrl = res.url;
    //       changeValue("page_border", "general")(borderSettings);
    //     })
    //     .catch((err) => {
    //       setToastInfo({
    //         isVisible: true,
    //         message: "Unable to upload.",
    //         isError: true,
    //       });
    //     })
    //     .finally(() => {
    //       setIsLoading(false);
    //     });
    // }
  };
  const onChangeCheckBox = (event) => {
    switch (event.target.value) {
      case "top":
        borderSettings.borderSides.top = !borderSettings.borderSides.top;

        break;
      case "bottom":
        borderSettings.borderSides.bottom = !borderSettings.borderSides.bottom;

        break;
      case "left":
        borderSettings.borderSides.left = !borderSettings.borderSides.left;

        break;
      case "right":
        borderSettings.borderSides.right = !borderSettings.borderSides.right;
        break;
    }

    changeValue("page_border", "general")(borderSettings);
  };

  const onTimeUpdate = () => {
    console.log("onTimeUpdate");
  };

  const onIconSizeChanged = (value) => {
    borderSettings.imageSize = parseInt(value);
    changeValue("page_border", "general")(borderSettings);
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      {toastInfo.isVisible ? (
        <ToastComponent
          message={toastInfo.message}
          isError={toastInfo.isError}
          onTimeUpdate={onTimeUpdate}
          onCLickToggle={onTimeUpdate}
        />
      ) : null}

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 relative mt-6">
          <div className="sticky top-0 mt-0 m-6">
            <DragAndDropBoardList
              curId={curId}
              setCurId={setCurId}
              toProcess={toProcess}
              setToProcess={setToProcess}
              deleteBoard={deleteBoard}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="sticky top-0">

            {form.general.map((e, i) => {
              return (
                <div key={`form_g_${i}`}>
                  <h4 className="text-lg text-center p-2">{e.title}</h4>
                  <hr />
                  <div className="m-2 mt-4">
                    {e.template.map((ee, ii) => {
                      if (!["pagebleed", "pdfSettings"].includes(ee.id)) {
                        return false;
                      }
                      return (
                        ee.id[0] !== "_" &&
                        createForm(ee, `form_g_${i}_${ii}`, "general")
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between mx-2">
              <h1>Add Page Border (Optional)</h1>
              <div className="">
                <Image
                  src={borderSettings.imageUrl}
                  loading={"lazy"}
                  width={50}
                  height={50}
                  alt={"Icon Image"}
                  id="icon-img"
                />
              </div>
            </div>

            <div id="fileUpload" className="mx-2">
              <div className="mb-2">
                <Label htmlFor="file" value="Upload Border Icon" />
              </div>

              <FileInput
                onChange={fileInputChanged}
                accept="image/*"
                id="file"
                helperText="Upload an icon"
              />
            </div>

            <div
              className="flex flex-col md:flex-row md:justify-evenly gap-4 m-2"
              id="checkbox"
            >
              <div className="flex items-center gap-2">
                <Checkbox id="left" value="left" onChange={onChangeCheckBox} />
                <Label htmlFor="left">Left</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="right"
                  value="right"
                  onChange={onChangeCheckBox}
                />
                <Label htmlFor="right">Right</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="top" value="top" onChange={onChangeCheckBox} />
                <Label htmlFor="top">Top</Label>
              </div>
              <div className="flex gap-2">
                <div className="flex h-5 items-center">
                  <Checkbox
                    id="bottom"
                    onChange={onChangeCheckBox}
                    value="bottom"
                  />
                </div>

                <Label htmlFor="bottom">Bottom</Label>
              </div>
            </div>
            <div className="m-2">
              <ComRange
                label={"Image Size"}
                options={{
                  min: 40,
                  max: 200,
                }}
                value={borderSettings.imageSize}
                setValue={onIconSizeChanged}
                icon="wrench"
              />
            </div>

            {formToUse &&
              formToUse.map((e, i) => {
                return (
                  <div key={`form_b_${i}`}>
                    <h4 className="text-lg text-center p-2">{e.title}</h4>
                    <hr />
                    <div className="m-2 mt-4">
                      {e.template.map((ee, ii) => {
                        return createForm(ee, `form_b_${i}_${ii}`);
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
