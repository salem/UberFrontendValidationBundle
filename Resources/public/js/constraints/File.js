/**
 * Check if element is a file
 *
 * @author Viktor Novikov <viktor.novikov95@gmail.com>
 * @constructor
 */
function UberFileValidationConstraint(field) {
    this.message = 'Field {{ field_name }} should be a file.';

    this.validate = function () {
        var error = '';
        var field_id = field.attr('id');
        if (((document.getElementById(field_id).files.length) == 0) || field.val() == '') {
            error = this.message.replace('{{ field_name }}', String(parse_field_name(field.attr('name'))));
            if (field.attr('data-message') != '') {
                error = field.attr('data-message');
            }
        } else {
            if (document.getElementById(field_id).files[0].size > field.attr('maxSize')) {
                error = field.attr('data-size-message');
            }
        }

        return error;
    }
}
