// import React from "react";

// const Terms = () => {
// 	return (
// 		<section>
// 			<div className="relative container sm:h-[220vh] h-[510vh]">
// 				<img
//                    src="assets/images-4/background/about-banner.jpg"
// 					alt="terms-image"
// 					className="object-cover w-full h-full opacity-10"
// 				/>
// 				<div className="absolute top-0 sm:left-[34vw] mt-16">
// 					<h1 className="font-extrabold text-4xl sm:text-5xl uppercase text-secondary text-center">
// 						Terms & Conditions
// 					</h1>
// 					<p className="text-gray-600 text-center text-lg mt-3 font-extralight capitalize">
// 						<span className="text-primary font-extrabold text-xl mr-6">~</span>
// 						You need to know
// 						<span className="text-primary font-extrabold text-xl ml-6">~</span>
// 					</p>
// 				</div>
// 				<div className="absolute top-40 sm:w-[70vw] sm:left-56 px-10 mt-10 sm:mt-0">
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">Terms</h3>
// 					<p className="font-light text-gray-600">
// 						By accessing the website at https://kodeum.io, you are agreeing to
// 						be bound by these terms of service, all applicable laws and
// 						regulations, and agree that you are responsible for compliance with
// 						any applicable local laws. If you do not agree with any of these
// 						terms, you are prohibited from using or accessing this site. The
// 						materials contained in this website are protected by applicable
// 						copyright and trademark law.
// 					</p>

// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Use License
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						Permission is granted to temporarily download one copy of the
// 						materials (information or software) on Kodeum’s website for
// 						personal, non-commercial transitory viewing only. This is the grant
// 						of a license, not a transfer of title, and under this license you
// 						may not: modify or copy the materials; use the materials for any
// 						commercial purpose, or for any public display (commercial or
// 						non-commercial); attempt to decompile or reverse engineer any
// 						software contained on Kodeum’s website; remove any copyright or
// 						other proprietary notations from the materials; or transfer the
// 						materials to another person or “mirror” the materials on any other
// 						server. This license shall automatically terminate if you violate
// 						any of these restrictions and may be terminated by Kodeum at any
// 						time. Upon terminating your viewing of these materials or upon the
// 						termination of this license, you must destroy any downloaded
// 						materials in your possession whether in electronic or printed
// 						format.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Disclaimer
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						The materials on Kodeum’s website are provided on an ‘as is’ basis.
// 						Kodeum makes no warranties, expressed or implied, and hereby
// 						disclaims and negates all other warranties including, without
// 						limitation, implied warranties or conditions of merchantability,
// 						fitness for a particular purpose, or non-infringement of
// 						intellectual property or other violation of rights. Further, Kodeum
// 						does not warrant or make any representations concerning the
// 						accuracy, likely results, or reliability of the use of the materials
// 						on its website or otherwise relating to such materials or on any
// 						sites linked to this site.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Limitations
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						In no event shall Kodeum or its suppliers be liable for any damages
// 						(including, without limitation, damages for loss of data or profit,
// 						or due to business interruption) arising out of the use or inability
// 						to use the materials on Kodeum’s website, even if Kodeum or a Kodeum
// 						authorized representative has been notified orally or in writing of
// 						the possibility of such damage. Because some jurisdictions do not
// 						allow limitations on implied warranties, or limitations of liability
// 						for consequential or incidental damages, these limitations may not
// 						apply to you.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Accuracy of materials
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						The materials appearing on Kodeum’s website could include technical,
// 						typographical, or photographic errors. Kodeum does not warrant that
// 						any of the materials on its website are accurate, complete or
// 						current. Kodeum may make changes to the materials contained on its
// 						website at any time without notice. However Kodeum does not make any
// 						commitment to update the materials.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">Links</h3>
// 					<p className="font-light text-gray-600">
// 						Kodeum has not reviewed all of the sites linked to its website and
// 						is not responsible for the contents of any such linked site. The
// 						inclusion of any link does not imply endorsement by Kodeum of the
// 						site. Use of any such linked website is at the user’s own risk.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Modifications
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						Kodeum may revise these terms of service for its website at any time
// 						without notice. By using this website you are agreeing to be bound
// 						by the then current version of these terms of service.
// 					</p>
// 					<h3 className="font-bold text-2xl text-secondary mb-3 mt-6">
// 						Governing Law
// 					</h3>
// 					<p className="font-light text-gray-600">
// 						These terms and conditions are governed by and construed in
// 						accordance with the laws of Krakow and you irrevocably submit to the
// 						exclusive jurisdiction of the courts in that State or location.
// 					</p>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Terms;


import React from "react";

const Terms = () => {
  return (
    <section>
      <div>
        <img
          src="assets/images-4/background/about-banner.jpg"
          alt="terms-image"
        />
        <div>
          <h1>
            Terms & Conditions
          </h1>
          <p>
            <span>~</span>
            You need to know
            <span>~</span>
          </p>
        </div>
        <div>
          <h3>
            Terms
          </h3>
          <p>
            By accessing the website at https://kodeum.io, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h3>
            Use License
          </h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Kodeum’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Kodeum’s website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or “mirror” the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Kodeum at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
          <h3>
            Disclaimer
          </h3>
          <p>
            The materials on Kodeum’s website are provided on an ‘as is’ basis. Kodeum makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Kodeum does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          <h3>
            Limitations
          </h3>
          <p>
            In no event shall Kodeum or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kodeum’s website, even if Kodeum or a Kodeum authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>
          <h3>
            Accuracy of materials
          </h3>
          <p>
            The materials appearing on Kodeum’s website could include technical, typographical, or photographic errors. Kodeum does not warrant that any of the materials on its website are accurate, complete or current. Kodeum may make changes to the materials contained on its website at any time without notice. However Kodeum does not make any commitment to update the materials.
          </p>
          <h3>
            Links
          </h3>
          <p>
            Kodeum has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kodeum of the site. Use of any such linked website is at the user’s own risk.
          </p>
          <h3>
            Modifications
          </h3>
          <p>
            Kodeum may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
          <h3>
            Governing Law
          </h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Krakow and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;

