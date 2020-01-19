<?php

namespace Zeroc0d3lab\ACL\Models;

use Zeroc0d3lab\Base\Models\BaseModel;

class Activation extends BaseModel
{
    /**
     * {@inheritDoc}
     */
    protected $table = 'activations';

    /**
     * {@inheritDoc}
     */
    protected $fillable = [
        'code',
        'completed',
        'completed_at',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'completed' => 'bool',
    ];
}
