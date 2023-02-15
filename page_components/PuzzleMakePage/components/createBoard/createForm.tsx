import ComCheckboxes from "../../../../components/Inputs/Checkboxes";
import ComInput from "../../../../components/Inputs/Input";
import { InputEnum } from "../../../../components/Inputs/InputEnum";
import ComInputMultiLine from "../../../../components/Inputs/InputMultiline";
import ComRange from "../../../../components/Inputs/Range";
import ComSelect from "../../../../components/Inputs/Select";
import UploadFile from "../../../../components/Inputs/UploadFile";

interface ICreateForm {
  ee;
  id;
  fD;
  changeValue;
}

const createForm = ({ ee, id, fD, changeValue }) => {
  if (ee.disabled && ee.disabled(fD)) {
    return;
  }
  switch (ee.type) {
    case InputEnum.Select:
      return (
        <ComSelect
          icon="wrench"
          key={id}
          label={ee.title}
          value={fD[ee.id]}
          setValue={changeValue(ee.id)}
          options={ee.options}
        />
      );
    case InputEnum.Input:
      return (
        <ComInput
          icon="wrench"
          key={id}
          label={ee.title}
          value={fD[ee.id]}
          setValue={changeValue(ee.id)}
        />
      );
    case InputEnum.InputMultiline:
      return (
        <ComInputMultiLine
          icon="wrench"
          key={id}
          label={ee.title}
          value={fD[ee.id]}
          setValue={changeValue(ee.id)}
        />
      );
    case InputEnum.Range:
      return (
        <ComRange
          icon="wrench"
          key={id}
          label={ee.title}
          value={fD[ee.id]}
          setValue={changeValue(ee.id)}
          options={ee.range}
        />
      );

    case InputEnum.Checkbox:
      return (
        <ComCheckboxes
          key={id}
          label={ee.title}
          value={fD[ee.id]}
          setValue={changeValue(ee.id)}
        />
      );
      // case InputEnum.UploadFile:
      //   return (
      //       <UploadFile
      //           key={id}
      //           label={ee.title}
      //           value={fD[ee.id]}
      //           hint={ee.hint}
      //           setValue={changeValue(ee.id)}
      //       />
      //   );

  }
};

export default createForm;
