export default function Footerform(){
    return(
        <>
        <div className="container py-5">
    <div className='headcontent text-center d-flex gap-3 flex-column'>
              <h2>REQUEST A QUOTE</h2> </div>
 
	<div className="form-wrap">	
		<form id="survey-form">
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<label id="name-label">Name</label>
						<input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label id="email-label">Email</label>
						<input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required/>
					</div>
				</div>

                <div className="col-md-6">
					<div className="form-group">
						<label id="name-label">Phone</label>
						<input type="tel" name="phone" placeholder="Enter your phone number" className="form-control" required/>
					</div>
				</div>

                <div className="col-md-6">
					<div className="form-group">
						<label id="name-label">Website</label>
						<input type="text" name="website"placeholder="Enter your Website Url" className="form-control" required/>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
                        <label id="number-label">Budget</label>
                        <select className="form-control" required  name="Budget"><option value="Budget">Select</option><option value="$1000-$2000">$1000-$2000</option><option value="$2000-$3000">$2000-$3000</option><option value="$3000-$4000">$3000-$4000</option><option value="$4000-$5000">$4000-$5000</option><option value="$5000-$7500">$5000-$7500</option><option value="over $7500">over $7500</option></select>


					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label>Service Interested In</label>
						<select id="dropdown" name="services" className="form-control" required>
							<option disabled selected value="">Select</option>
							<option value="webredesign">Website Redesign</option>
							<option value="logodesign">Logo Design & Branding</option>
							<option value="maintain">Web Hosting & Maintenance</option>
							<option value="seo">Search Engine Optimization</option>
							<option value="newwebsite">New Website Design</option>
                            <option value="brochuredesign">Brochure Design</option>
                            <option value="blogdesign">Blog Design</option>
                            <option value="googleads">Google Ads Management</option>
						</select>
					</div>
				</div>
			</div>
		 
			<div className="row">
				<div className="col-md-12">
					<div className="form-group">
						<label>Leave Message</label>
						<textarea  id="comments" className="form-control" name="comment" placeholder="Enter your comment here..."></textarea>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-4">
					<button type="submit" id="submit" className="btn btn-primary btn-block">Get a Quote</button>
				</div>
			</div>

		</form>
	</div>	
</div>
        </>
    );
}