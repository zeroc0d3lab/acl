<?php

namespace Zeroc0d3lab\ACL\Events;

use Zeroc0d3lab\ACL\Models\Role;
use Event;
use Illuminate\Queue\SerializesModels;

class RoleUpdateEvent extends Event
{
    use SerializesModels;

    /**
     * @var Role
     */
    public $role;

    /**
     * RoleUpdateEvent constructor.
     *
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        $this->role = $role;
    }
}
