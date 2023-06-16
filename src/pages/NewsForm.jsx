import React, { useRef, useState } from 'react'

const NewsForm = () => {
const [uploadImage, setUploadImage] = useState("");
	const imgRef = useRef(null);
	const generalErrorRef = useRef(null);
  const handleImageUpload = async (e) => {
		e.preventDefault();
		const file = Object.values(e.target.files)[0];
		setUploadImage(file);
  };
  
  const [newsContent, setNewsContent] = useState({
    
  })



  const submitData = (e) => {
    
  }
  return (
    		<section className="mx-auto w-[96%] max-w-[500px] mt-20">
			<h2 className="text-center text-4xl">Add New Articles</h2>
			<form
				onSubmit={(e) => submitData(e)}
				className="flex flex-col flex-wrap mt-16 gap-6 "
			>
				<div className="w-100%">
					<h3 className="text-xl">* New Heading</h3>
					<div className="flex justify-between mt-3">
						<input
							className="w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
							type="text"
							name=""
							id=""
							// placeholder={data ? data.contactEmail : "Fullname"}
							
						/>
					</div>
				</div>
				<div className="w-100%">
					<h3 className="text-xl">* Date of Entry</h3>
					<input
						className="mt-3 w-[100%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="number"
						placeholder=""
						name=""
						id=""
						min="1900"
						max="2099"
						step="1"
						required
						
					/>
				</div>
				<div className="w-100% ">
					<h3 className="text-xl">* Image</h3>
					<input
						// ref={imgRef}
						className="mt-3 w-[70%] h-[44px] pl-3 focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						type="file"
						placeholder=""
						name="image"
						// onChange={handleImageUpload}
						id=""
					/>
					<span className="italics hidden text-red-700 mt-1 font-bold"></span>
				</div>

				<div className="w-100%">
					<h3 className="text-xl">* Description</h3>
					<textarea
						className=" mt-3 pl-3 w-[100%] focus-border-[1px] rounded focus:outline-none border-[1px] border-black"
						name=""
						id=""
						cols={20}
						rows={10}
						
					></textarea>
				</div>
				
				<span
					className="hidden font-bold text-base text-red-700"
					// ref={generalErrorRef}
				></span>
				<button
					type="submit"
					className="w-[60%] mt-12 h-[44px]  bg-[#fca311] self-center rounded-md form__button text-2xl"
				>
					Submit
				</button>
			</form>
		</section>
  )
}

export default NewsForm