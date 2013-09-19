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
jQuery(function(){
	jQuery('#owner').on('click', function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery(this).next('button').trigger('click')
		}
		else{
		}
	})
	jQuery('.uncheck-btn').click(function(){
		jQuery('#owner').trigger('click');
	})
	jQuery('.ya-read-more-less').click(function(){
		var show = '<span class="ya-label">Show</span><span class="ya-show-link-icon" data-icon="E" aria-hidden="true"></span>';
		var hide = '<span class="ya-label">Hide</span><span class="ya-show-link-icon" data-icon="C" aria-hidden="true"></span>';
		if(jQuery(this).html() == hide){
			jQuery(this).html(show) 
		}
		else{
			jQuery(this).html(hide) 
		}
	})
})

