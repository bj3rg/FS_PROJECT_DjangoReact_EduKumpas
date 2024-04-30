import React from "react";
import FieldInput from "../../components/mini-components/FieldInput";
export const AddAdmission = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="w-[750px] bg-blue-600 mt-500 px-[30px] py-[30px]  rounded-[15px] z-[99]">
        <div className="text-white mb-[10px] flex flex-col gap-[3px]">
          <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
            Add Admission Process
          </h1>
          <p className="text-[12px]">
            Fill out the following fields. Use “N/A” if not applicable.
          </p>
        </div>
        <div className="flex flex-col gap-[10px]">
          {/* first row */}
          <div className="w-full flex justify-between ">
            <FieldInput
              inputDisplay={"Requirements"}
              type={"text"}
              width={"w-[340px]"}
              handleChange={(e) => {
                setNewOfficial((prev) => ({
                  ...prev,
                  surname: e.target.value,
                }));
              }}
            />
          </div>
          {/* second row */}
          <div className="w-full flex justify-between ">
            <FieldInput
              inputDisplay={"Process Guide"}
              type={"text"}
              width={"w-[690px]"}
              handleChange={(e) => {
                setNewOfficial((prev) => ({
                  ...prev,
                  address: e.target.value,
                }));
              }}
            />
          </div>
          {/* third row */}
          <div className="w-full flex justify-between ">
            <FieldInput
              inputDisplay={"Admission Fee"}
              type={"number"}
              width={"w-[340px]"}
              handleChange={(e) => {
                setNewOfficial((prev) => ({ ...prev, sex: e.target.value }));
              }}
            />
          </div>
          {/* fourth row */}

          <div className="w-full flex gap-[20px] mt-5 justify-between">
            <button className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer">
              Clear
            </button>
            <button className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer">
              Add
            </button>
            {/* <ButtonComp2
            text="Add"
            otherStyle={"p-[5px] rounded-[10px]"}
            handleClick={handleClick}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmission;