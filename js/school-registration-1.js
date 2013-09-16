jQuery(document).ready(function(){
	addStaffMemberControl();	
});

function addStaffMemberControl()
	{
		jQuery("input[name='code-conduct-select']").change(function(){
			if(jQuery(this).val() == "add-staff-member")
			{
				
				jQuery(".ya-add-staff-member").slideDown();
			}
			else
			{
				jQuery(".ya-add-staff-member").slideUp();
			}
			
		});
	}

