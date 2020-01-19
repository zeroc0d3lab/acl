<?php

namespace Zeroc0d3lab\ACL\Providers;

use Zeroc0d3lab\ACL\Events\RoleAssignmentEvent;
use Zeroc0d3lab\ACL\Events\RoleUpdateEvent;
use Zeroc0d3lab\ACL\Listeners\LoginListener;
use Zeroc0d3lab\ACL\Listeners\RoleAssignmentListener;
use Zeroc0d3lab\ACL\Listeners\RoleUpdateListener;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        RoleUpdateEvent::class     => [
            RoleUpdateListener::class,
        ],
        RoleAssignmentEvent::class => [
            RoleAssignmentListener::class,
        ],
        Login::class               => [
            LoginListener::class,
        ],
    ];
}
