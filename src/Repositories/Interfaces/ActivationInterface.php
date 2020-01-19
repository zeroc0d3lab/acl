<?php

namespace Zeroc0d3lab\ACL\Repositories\Interfaces;

use Zeroc0d3lab\ACL\Models\User;

interface ActivationInterface
{
    /**
     * Create a new activation record and code.
     *
     * @param  \Zeroc0d3lab\ACL\Models\User $user
     * @return \Zeroc0d3lab\ACL\Models\Activation
     */
    public function createUser(User $user);

    /**
     * Checks if a valid activation for the given user exists.
     *
     * @param  \Zeroc0d3lab\ACL\Models\User $user
     * @param  string $code
     * @return \Zeroc0d3lab\ACL\Models\Activation|bool
     */
    public function exists(User $user, $code = null);

    /**
     * Completes the activation for the given user.
     *
     * @param  \Zeroc0d3lab\ACL\Models\User $user
     * @param  string $code
     * @return bool
     */
    public function complete(User $user, $code);

    /**
     * Checks if a valid activation has been completed.
     *
     * @param  \Zeroc0d3lab\ACL\Models\User $user
     * @return \Zeroc0d3lab\ACL\Models\Activation|bool
     */
    public function completed(User $user);

    /**
     * Remove an existing activation (deactivate).
     *
     * @param  \Zeroc0d3lab\ACL\Models\User $user
     * @return bool|null
     */
    public function remove(User $user);

    /**
     * Remove expired activation codes.
     *
     * @return int
     */
    public function removeExpired();
}
