<?php

namespace Zeroc0d3lab\ACL\Repositories\Interfaces;

use Zeroc0d3lab\Support\Repositories\Interfaces\RepositoryInterface;

interface UserInterface extends RepositoryInterface
{

    /**
     * Get unique username from email
     *
     * @param $email
     * @return string
     *
     */
    public function getUniqueUsernameFromEmail($email);
}
