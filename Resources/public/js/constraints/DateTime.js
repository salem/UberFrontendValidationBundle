/**
 * Check if element value is valid DateTime value
 *
 * @author Viktor Novikov <viktor.novikov95@gmail.com>
 * @constructor
 */
function UberDateTimeValidationConstraint(field)
{
    this.message = 'This {{value}} is not valid DateTime value';

    this.validate = function () {
        var pattern = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
        var error = '';
        if (!pattern.test(field.val())) {
            error = this.message.replace('{{value}}', String(parse_field_name(field.attr('name'))));
            if (field.attr('data-message') != '') {
                error = field.attr('data-message');
            }
        }

        return error;
    }
}
