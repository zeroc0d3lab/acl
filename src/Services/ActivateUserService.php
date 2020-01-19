<?php

namespace Zeroc0d3lab\ACL\Services;

use Zeroc0d3lab\ACL\Models\User;
use Zeroc0d3lab\ACL\Repositories\Interfaces\ActivationInterface;
use Zeroc0d3lab\ACL\Repositories\Interfaces\UserInterface;
use InvalidArgumentException;

class ActivateUserService
{
    /**
     * @var UserInterface
     */
    protected $userRepository;

    /**
     * @var ActivationInterface
     */
    protected $activationRepository;

    /**
     * ActivateUserService constructor.
     * @param UserInterface $userRepository
     * @param ActivationInterface $activationRepository
     */
    public function __construct(UserInterface $userRepository, ActivationInterface $activationRepository)
    {
        $this->userRepository = $userRepository;
        $this->activationRepository = $activationRepository;
    }

    /**
     * Activates the given user.
     *
     * @param mixed $user
     * @return bool
     * @throws \InvalidArgumentException
     */
    public function activate($user)
    {
        if (!$user instanceof User) {
            throw new InvalidArgumentException('No valid user was provided.');
        }

        event('acl.activating', $user);

        $activation = $this->activationRepository->createUser($user);

        event('acl.activated', [$user, $activation]);

        return $this->activationRepository->complete($user, $activation->code);
    }
}
