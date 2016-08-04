/**
 * Created by Paul Chidi on 8/4/2016.
 */
function submitState(el) {

    var $form = $(el),
        $requiredInputs = $form.find('input[type="text"]'),
        $submit = $form.find('input[type="submit"]');

    $submit.attr('disabled', 'disabled');

    $requiredInputs.keyup(function () {

        $form.data('empty', 'false');

        $requiredInputs.each(function () {
            if ($(this).val() === '') {
                $form.data('empty', 'true');
            }
        });

        if ($form.data('empty') === 'true') {
            $submit.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
        } else {
            $submit.removeAttr('disabled').attr('title', 'click to submit');
        }
    });


}
// apply to each form element individually
submitState('#ajax-contact-form');
