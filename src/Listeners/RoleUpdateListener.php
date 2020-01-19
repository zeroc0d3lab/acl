<?php

namespace Zeroc0d3lab\ACL\Listeners;

use Illuminate\Support\Facades\Auth;
use Zeroc0d3lab\ACL\Events\RoleUpdateEvent;

class RoleUpdateListener
{
    /**
     * Handle the event.
     *
     * @param  RoleUpdateEvent $event
     * @return void
     *
     * @throws \Exception
     */
    public function handle(RoleUpdateEvent $event)
    {
        info('Role ' . $event->role->name . ' updated; rebuilding permission sets');

        $permissions = $event->role->permissions;
        foreach ($event->role->users()->get() as $user) {
            $permissions[ACL_ROLE_SUPER_USER] = $user->super_user;
            $permissions[ACL_ROLE_MANAGE_SUPERS] = $user->manage_supers;

            $user->permissions = $permissions;
            $user->save();
        }

        cache()->forget(md5('cache-dashboard-menu-' . Auth::user()->getKey()));
    }
}
