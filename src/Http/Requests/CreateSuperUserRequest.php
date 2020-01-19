<?php

namespace Zeroc0d3lab\ACL\Http\Requests;

use Zeroc0d3lab\Support\Http\Requests\Request;

class CreateSuperUserRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|max:60|min:6|email',
        ];
    }
}
